"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pencil, Trash2, PlusCircle } from "lucide-react";

interface Testimony {
  name: string;
  position: string;
  message: string;
  rating: number;
}

const TestimoniesSettings = () => {
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);
  const [newTestimony, setNewTestimony] = useState<Testimony>({
    name: "",
    position: "",
    message: "",
    rating: 5,
  });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Fetch testimonies
  useEffect(() => {
    const fetchTestimonies = async () => {
      try {
        const { data } = await axios.get("/api/testimonies");
        setTestimonies(data);
      } catch (error) {
        console.error("Error fetching testimonies:", error);
      }
    };
    fetchTestimonies();
  }, []);

  // Add or update a testimony
  const handleSaveTestimony = async () => {
    try {
      if (editingIndex !== null) {
        await axios.put("/api/testimonies", { index: editingIndex, ...newTestimony });
        const updatedTestimonies = [...testimonies];
        updatedTestimonies[editingIndex] = newTestimony;
        setTestimonies(updatedTestimonies);
        setEditingIndex(null);
      } else {
        const { data } = await axios.post("/api/testimonies", newTestimony);
        setTestimonies([...testimonies, data.testimony]);
      }
      setNewTestimony({ name: "", position: "", message: "", rating: 5 });
    } catch (error) {
      console.error("Error saving testimony:", error);
    }
  };

  // Edit a testimony
  const handleEditTestimony = (index: number) => {
    setNewTestimony(testimonies[index]);
    setEditingIndex(index);
  };

  // Delete a testimony
  const handleDeleteTestimony = async (index: number) => {
    try {
      await axios.delete("/api/testimonies", { data: { index } });
      setTestimonies(testimonies.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting testimony:", error);
    }
  };

  return (
    <div className="p-6 mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Manage Testimonies</h2>

      {/* Testimony List */}
      {testimonies.map((testimony, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 border rounded-md my-2 bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
        >
          <div>
            <p className="font-semibold">{testimony.name} ({testimony.position})</p>
            <p className="text-sm">{testimony.message}</p>
            <p className="text-yellow-500">{'★'.repeat(testimony.rating)}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => handleEditTestimony(index)} className="text-blue-500 hover:text-blue-700">
              <Pencil size={18} />
            </button>
            <button onClick={() => handleDeleteTestimony(index)} className="text-red-500 hover:text-red-700">
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}

      {/* Form to Add/Edit Testimony */}
      <h3 className="font-medium mt-4">{editingIndex !== null ? "Edit Testimony" : "Add New Testimony"}</h3>
      <input
        type="text"
        placeholder="Name"
        value={newTestimony.name}
        onChange={(e) => setNewTestimony({ ...newTestimony, name: e.target.value })}
        className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 mt-2"
      />
      <input
        type="text"
        placeholder="Position"
        value={newTestimony.position}
        onChange={(e) => setNewTestimony({ ...newTestimony, position: e.target.value })}
        className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 mt-2"
      />
      <textarea
        placeholder="Message"
        value={newTestimony.message}
        onChange={(e) => setNewTestimony({ ...newTestimony, message: e.target.value })}
        className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 mt-2"
      ></textarea>
      <input
        type="number"
        min="1"
        max="5"
        value={newTestimony.rating}
        onChange={(e) => setNewTestimony({ ...newTestimony, rating: parseInt(e.target.value, 10) })}
        className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 mt-2"
      />
      <button
        type="button"
        onClick={handleSaveTestimony}
        className="mt-3 flex items-center gap-2 bg-blue-500 text-white p-2 rounded-md w-full justify-center hover:bg-blue-600"
      >
        <PlusCircle size={20} />
        {editingIndex !== null ? "Update Testimony" : "Add Testimony"}
      </button>
    </div>
  );
};

export default TestimoniesSettings;
