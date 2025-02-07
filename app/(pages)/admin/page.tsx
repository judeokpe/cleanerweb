// "use client"

// import { Testimony } from '@/app/@types/next-auth';
// import React, { useState, useEffect, useCallback } from 'react';

// export default function AdminSettings() {
//   const [websiteName, setWebsiteName] = useState('');
//   const [logoURL, setLogoURL] = useState('');
//   const [testimonies, setTestimonies] = useState<Testimony[]>([]);

//   const [newTestimony, setNewTestimony] = useState<Testimony>({
//     name: "",
//     message: "",
//     rating: 5,
//     position: "",
//   });
  
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSettings = async () => {
//       try {
//         const res = await fetch('/api/settings');
//         if (!res.ok) throw new Error('Failed to fetch settings');
//         const data = await res.json();
//         setWebsiteName(data.websiteName || '');
//         setLogoURL(data.logoURL || '');
//         setTestimonies(data.testimonies || []);
//         setProfileImage(data.profileImage || null);
//       } catch (err:any) {
//         setError(err.message);
//       }
//     };
//     fetchSettings();
//   }, []);

//   const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

  
//   const addTestimony = useCallback(() => {
//     if (!newTestimony.name || !newTestimony.message) return;
//     setTestimonies((prevTestimonies) => [...prevTestimonies, newTestimony]);
//     setNewTestimony({ name: '', message: '', rating: 5, position: '' });
//   }, [newTestimony]);

//   const removeTestimony = (index: number) => {
//     setTestimonies((prevTestimonies) => prevTestimonies.filter((_, i) => i !== index));
//   };

//   const updateSettings = async (e:any) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('/api/settings', {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ websiteName, logoURL, testimonies, profileImage }),
//       });
//       if (!res.ok) throw new Error('Failed to update settings');
//       alert('Settings updated!');
//     } catch (err:any) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-full md:w-1/4 bg-white dark:bg-gray-800 p-4">
//         <h2 className="text-lg font-semibold">Settings</h2>
//         <ul className="mt-2 space-y-2">
//           <li className="cursor-pointer hover:underline">General</li>
//           <li className="cursor-pointer hover:underline">Profile</li>
//           <li className="cursor-pointer hover:underline">Testimonies</li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <h1 className="text-2xl font-bold">Admin Settings</h1>
//         {error && <p className="text-red-500">{error}</p>}
//         <form onSubmit={updateSettings} className="space-y-6">
//           {/* Profile Image Section */}
//           <div>
//             <label className="block font-medium">Profile Image:</label>
//             <div className="mt-2">
//               {profileImage ? (
//                 <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
//               ) : (
//                 <div className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
//               )}
//             </div>
//             <input type="file" accept="image/*" onChange={handleProfileImageChange} className="mt-2" />
//           </div>

//           {/* Website Name */}
//           <div>
//             <label className="block font-medium">Website Name:</label>
//             <input type="text" value={websiteName} onChange={(e) => setWebsiteName(e.target.value)}
//               className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" />
//           </div>

//           {/* Logo URL */}
//           <div>
//             <label className="block font-medium">Logo URL:</label>
//             <input type="text" value={logoURL} onChange={(e) => setLogoURL(e.target.value)}
//               className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" />
//           </div>

//           {/* Testimonies Management */}
//           <div>
//             <h2 className="text-lg font-semibold">Manage Testimonies</h2>
//             {testimonies.map((testimony, index) => (
//               <div key={index} className="p-3 border rounded-md my-2 dark:bg-gray-800 dark:border-gray-700">
//                 <p><strong>{testimony.name} ({testimony.position}):</strong> {testimony.message} ({testimony.rating}★)</p>
//                 <button type="button" onClick={() => removeTestimony(index)} className="text-red-500">Remove</button>
//               </div>
//             ))}
            
//             <h3 className="font-medium">Add New Testimony</h3>
//             <input type="text" placeholder="Name" value={newTestimony.name} onChange={(e) => setNewTestimony({...newTestimony, name: e.target.value})} className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" />
//             <input type="text" placeholder="Position" value={newTestimony.position} onChange={(e) => setNewTestimony({...newTestimony, position: e.target.value})} className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" />
//             <textarea placeholder="Message" value={newTestimony.message} onChange={(e) => setNewTestimony({...newTestimony, message: e.target.value})} className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"></textarea>
//             <input type="number" min="1" max="5" value={newTestimony.rating} onChange={(e) => setNewTestimony({...newTestimony, rating: parseInt(e.target.value, 10)})} className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" />
//             <button type="button" onClick={addTestimony} className="mt-2 bg-blue-500 text-white p-2 rounded-md">Add Testimony</button>
//           </div>

//           <button type="submit" className="bg-green-500 text-white p-2 rounded-md">Save Changes</button>
//         </form>
//       </main>
//     </div>
//   );
// }


"use client";

import { Testimony } from '@/app/@types/next-auth';
import ProfileSettings from '@/app/components/Admin/ProfileSettings';
import TestimoniesSettings from '@/app/components/Admin/TestimoniesSettings';
import React, { useState, useEffect, useCallback } from 'react';




export default function AdminSettings() {
  const [websiteName, setWebsiteName] = useState('');
  const [logoURL, setLogoURL] = useState('');
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);
  const [newTestimony, setNewTestimony] = useState<Testimony>({ name: "", message: "", rating: 5, position: "" });
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch('/api/settings');
        if (!res.ok) throw new Error('Failed to fetch settings');
        const data = await res.json();
        setWebsiteName(data.websiteName || '');
        setLogoURL(data.logoURL || '');
        setTestimonies(data.testimonies || []);
        setProfileImage(data.profileImage || null);
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchSettings();
  }, []);

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addTestimony = useCallback(() => {
    if (!newTestimony.name || !newTestimony.message) return;
    setTestimonies((prevTestimonies) => [...prevTestimonies, newTestimony]);
    setNewTestimony({ name: '', message: '', rating: 5, position: '' });
  }, [newTestimony]);

  const removeTestimony = (index: number) => {
    setTestimonies((prevTestimonies) => prevTestimonies.filter((_, i) => i !== index));
  };

  const updateSettings = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ websiteName, logoURL, testimonies, profileImage }),
      });
      if (!res.ok) throw new Error('Failed to update settings');
      alert('Settings updated!');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <aside className="w-full md:w-1/4 bg-white dark:bg-gray-800 p-4">
        <h2 className="text-lg font-semibold">Settings</h2>
        <ul className="mt-2 space-y-2">
          <li className="cursor-pointer hover:underline">General</li>
          <li className="cursor-pointer hover:underline">Profile</li>
          <li className="cursor-pointer hover:underline">Testimonies</li>
        </ul>
      </aside>

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Admin Settings</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={updateSettings} className="space-y-6">
          <ProfileSettings profileImage={profileImage} handleProfileImageChange={handleProfileImageChange} />
          <TestimoniesSettings testimonies={testimonies} newTestimony={newTestimony} setNewTestimony={setNewTestimony} addTestimony={addTestimony} removeTestimony={removeTestimony} />
          <button type="submit" className="bg-green-500 text-white p-2 rounded-md">Save Changes</button>
        </form>
      </main>
    </div>
  );
}
