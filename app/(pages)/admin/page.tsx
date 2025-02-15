// "use client";

// import axios from 'axios';
// import { Testimony } from '@/app/@types/next-auth';
// import ProfileSettings from '@/app/components/Admin/ProfileSettings';
// import TestimoniesSettings from '@/app/components/Admin/TestimoniesSettings';
// import React, { useState, useEffect } from 'react';
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import Image from 'next/image';


// export default function AdminSettings() {
//   const [activeTab, setActiveTab] = useState<'general' | 'profile' | 'testimonies'>('general');
//   const [websiteName, setWebsiteName] = useState('');
//   const [logoFile, setLogoFile] = useState<File | null>(null);
//   const [logoPreview, setLogoPreview] = useState('');
//   const [testimonies, setTestimonies] = useState<Testimony[]>([]);
//   const [newTestimony, setNewTestimony] = useState<Testimony>({ name: "", message: "", rating: 5, position: "" });
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [editingIndex, setEditingIndex] = useState<number | null>(null);

//   const { data: session, status } = useSession();
// const router = useRouter();
//   useEffect(() => {
   
//     if (status === "loading") return;
//     if (!session || session.user.role !== "admin") {
//       router.push("/testimony"); // Redirect to login if not admin
//     }
//   }, [session, status, router]);

//   useEffect(() => {
//     if (!session || session.user.role !== "admin") return;
//     const fetchSettings = async () => {
//       try {
//         const { data } = await axios.get('/api/settings');
//         setWebsiteName(data.websiteName || '');
//         setLogoPreview(data.logoURL || '');
//         setTestimonies(data.testimonies || []);
//         setProfileImage(data.profileImage || null);
//       } catch (err: any) {
//         setError(err.message);
//       }
//     };
//     fetchSettings();
//   }, [session]);


//   if (!session || session.user.role !== "admin") {
//     return <p className="text-center text-red-500">Access Denied</p>;
//   }
//   const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setLogoFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setLogoPreview(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

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

//   const updateSettings = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("websiteName", websiteName);
      
//       if (logoFile) {
//         formData.append("logo", logoFile);
//       }

//       await axios.put('/api/settings', formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert('Settings updated!');
//     } catch (err: any) {
//       console.error("Update failed:", err);
//       setError(err.message);
//     }
//   };

//   const addTestimony = () => {
//     if (editingIndex !== null) {
//       const updatedTestimonies = [...testimonies];
//       updatedTestimonies[editingIndex] = newTestimony;
//       setTestimonies(updatedTestimonies);
//       setEditingIndex(null);
//     } else {
//       setTestimonies([...testimonies, newTestimony]);
//     }
//     setNewTestimony({ name: "", position: "", message: "", rating: 5 });
//   };

//   const removeTestimony = (index: number) => {
//     setTestimonies(testimonies.filter((_, i) => i !== index));
//   };

//   const editTestimony = (index: number) => {
//     setNewTestimony(testimonies[index]);
//     setEditingIndex(index);
//   };

//   return (
//     <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
//       <aside className="w-full md:w-1/4 bg-white dark:bg-gray-800 p-4">
//         <h2 className="text-lg font-semibold">Settings</h2>
//         <ul className="mt-2 space-y-2">
//           <li className={`cursor-pointer hover:underline ${activeTab === 'general' ? 'text-green-500 font-bold' : ''}`} onClick={() => setActiveTab('general')}>General</li>
//           <li className={`cursor-pointer hover:underline ${activeTab === 'profile' ? 'text-green-500 font-bold' : ''}`} onClick={() => setActiveTab('profile')}>Profile</li>
//           <li className={`cursor-pointer hover:underline ${activeTab === 'testimonies' ? 'text-green-500 font-bold' : ''}`} onClick={() => setActiveTab('testimonies')}>Testimonies</li>
//         </ul>
//       </aside>

//       <main className="flex-1 p-6">
//         <h1 className="text-2xl font-bold">Admin Settings</h1>
//         {error && <p className="text-red-500">{error}</p>}

//         <form onSubmit={updateSettings} className="space-y-6">
//           {activeTab === 'general' && (
//             <>
//               <div>
//                 <label className="block font-medium">Website Name</label>
//                 <input type="text" className="w-full p-2 border rounded-md text-2xl dark:text-black" value={websiteName} onChange={(e) => setWebsiteName(e.target.value)} />
//               </div>

//               <div>
//                 <label className="block font-medium">Logo</label>
//                 <input type="file" accept="image/*" className="w-full p-2 border rounded-md" onChange={handleLogoChange} />
//               </div>

//               {logoPreview && (
//                 <div className="mt-4">
//                   <label className="block font-medium">Current Logo</label>
//                   <Image width={600} height={600} src={logoPreview} alt="Website Logo" className="mt-2 w-32 h-32 object-contain border rounded-md shadow-md bg-white" />
//                 </div>
//               )}
//             </>
//           )}

//           {activeTab === 'profile' && (
//             <ProfileSettings profileImage={profileImage} handleProfileImageChange={handleProfileImageChange} />
//           )}

//           {activeTab === 'testimonies' && (
//             <TestimoniesSettings
//               testimonies={testimonies}
//               newTestimony={newTestimony}
//               setNewTestimony={setNewTestimony}
//               addTestimony={addTestimony}
//               removeTestimony={removeTestimony}
//               editTestimony={editTestimony}
//               editingIndex={editingIndex}
//             />
//           )}

//           <button type="submit" className="bg-green-500 text-white p-2 rounded-md">Save Changes</button>
//         </form>
//       </main>
//     </div>
//   );
// }


"use client";

import axios from 'axios';
import { Testimony } from '@/app/@types/next-auth';
import ProfileSettings from '@/app/components/Admin/ProfileSettings';
import TestimoniesSettings from '@/app/components/Admin/TestimoniesSettings';
import React, { useState, useEffect } from 'react';
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState<'general' | 'profile' | 'testimonies'>('general');
  const [websiteName, setWebsiteName] = useState('');
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState('');
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);
  const [newTestimony, setNewTestimony] = useState<Testimony>({ name: "", message: "", rating: 5, position: "" });
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      router.push("/testimony"); // Redirect to login if not admin
    }
  }, [session, status, router]);

  useEffect(() => {
    if (!session || session.user.role !== "admin") return;
    const fetchSettings = async () => {
      try {
        const { data } = await axios.get('/api/settings');
        setWebsiteName(data.websiteName || '');
        setLogoPreview(data.logoURL || '');
        setTestimonies(data.testimonies || []);
        setProfileImage(data.profileImage || null);
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchSettings();
  }, [session]);

  if (!session || session.user.role !== "admin") {
    return <p className="text-center text-red-500">Access Denied</p>;
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("websiteName", websiteName);
      if (logoFile) {
        formData.append("logo", logoFile);
      }
      await axios.put('/api/settings', formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert('Settings updated!');
    } catch (err: any) {
      console.error("Update failed:", err);
      setError(err.message);
    }
  };

  const fetchTestimonies = async () => {
    try {
      const { data } = await axios.get('/api/testimonies');
      setTestimonies(data);
    } catch (err) {
      console.error("Failed to fetch testimonies:", err);
    }
  };

  const addTestimony = async () => {
    try {
      const response = await axios.post('/api/testimonies', newTestimony);
      setTestimonies([...testimonies, response.data.testimony]);
      setNewTestimony({ name: "", position: "", message: "", rating: 5 });
    } catch (err) {
      console.error("Failed to add testimony:", err);
    }
  };

  const removeTestimony = async (index: number) => {
    try {
      await axios.delete('/api/testimonies', { data: { index } });
      setTestimonies(testimonies.filter((_, i) => i !== index));
    } catch (err) {
      console.error("Failed to remove testimony:", err);
    }
  };

  const editTestimony = (index: number) => {
    setNewTestimony(testimonies[index]);
    setEditingIndex(index);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <aside className="w-full md:w-1/4 bg-white dark:bg-gray-800 p-4">
        <h2 className="text-lg font-semibold">Settings</h2>
        <ul className="mt-2 space-y-2">
          <li className={`cursor-pointer hover:underline ${activeTab === 'testimonies' ? 'text-green-500 font-bold' : ''}`} onClick={() => setActiveTab('testimonies')}>Testimonies</li>
        </ul>

        {/* Logout Button */}
        <button 
          onClick={() => signOut({ callbackUrl: '/' })}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </aside>

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Admin Settings</h1>
        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={updateSettings} className="space-y-6">
          {activeTab === 'testimonies' && (
            <TestimoniesSettings
              testimonies={testimonies}
              newTestimony={newTestimony}
              setNewTestimony={setNewTestimony}
              addTestimony={addTestimony}
              removeTestimony={removeTestimony}
              editTestimony={editTestimony}
              editingIndex={editingIndex}
            />
          )}
        </form>
      </main>
    </div>
  );
}
