import React from 'react'

function ProfileSettings({ profileImage, handleProfileImageChange }: { profileImage: string | null, handleProfileImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    
          <div>
            <label className="block font-medium">Profile Image:</label>
            <div className="mt-2">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
              ) : (
                <div className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              )}
            </div>
            <input type="file" accept="image/*" onChange={handleProfileImageChange} className="mt-2" />
          </div>
      
      
  )
}

export default ProfileSettings