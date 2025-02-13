// import { NextResponse } from "next/server";
// import { connectDB } from "@/app/utils/db";
// import Settings from "@/app/models/Settings";

// // ✅ Connect to MongoDB before handling requests
// connectDB();

// // 📌 Fetch testimonies (GET)
// export async function GET() {
//   try {
//     const settings = await Settings.findOne();
//     return NextResponse.json(settings?.testimonies || [], { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to fetch testimonies" }, { status: 500 });
//   }
// }

// // 📌 Add a new testimony (POST)
// export async function POST(req: Request) {
//     try {
//       const body = await req.json();
//       console.log("Incoming POST Body:", body); // Debugging log
  
//       const { name, position, message, rating } = body;
  
//       if (!name || !position || !message || rating < 1 || rating > 5) {
//         return NextResponse.json({ error: "Invalid testimony data", body }, { status: 400 });
//       }
  
//       // Check if settings exist, create one if not
//       let settings = await Settings.findOne();
//       if (!settings) {
//         console.log("No settings found, creating default settings...");
//         settings = new Settings({ testimonies: [] });
//         await settings.save();
//       }
  
//       // Add the new testimony
//       settings.testimonies.push({ name, position, message, rating });
//       await settings.save();
  
//       return NextResponse.json({ message: "Testimony added", testimony: { name, position, message, rating } }, { status: 201 });
//     } catch (error) {
//       console.error("Error adding testimony:", error);
//       return NextResponse.json({ error: "Failed to add testimony" }, { status: 500 });
//     }
//   }
  

// // 📌 Update a testimony (PUT)
// export async function PUT(req: Request) {
//   try {
//     const body = await req.json();
//     const { index, name, position, message, rating } = body;

//     if (index === undefined || index < 0 || !name || !position || !message || rating < 1 || rating > 5) {
//       return NextResponse.json({ error: "Invalid testimony data" }, { status: 400 });
//     }

//     const settings = await Settings.findOne();
//     if (!settings || index >= settings.testimonies.length) {
//       return NextResponse.json({ error: "Invalid testimony index" }, { status: 404 });
//     }

//     settings.testimonies[index] = { name, position, message, rating };
//     await settings.save();

//     return NextResponse.json({ message: "Testimony updated" }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to update testimony" }, { status: 500 });
//   }
// }

// // 📌 Delete a testimony (DELETE)
// export async function DELETE(req: Request) {
//   try {
//     const body = await req.json();
//     const { index } = body;

//     if (index === undefined) {
//       return NextResponse.json({ error: "Index is required" }, { status: 400 });
//     }

//     const settings = await Settings.findOne();
//     if (!settings || index < 0 || index >= settings.testimonies.length) {
//       return NextResponse.json({ error: "Invalid testimony index" }, { status: 404 });
//     }

//     settings.testimonies.splice(index, 1);
//     await settings.save();

//     return NextResponse.json({ message: "Testimony removed" }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to remove testimony" }, { status: 500 });
//   }
// }
import { NextResponse } from "next/server";
import { connectDB } from "@/app/utils/db";
import Settings from "@/app/models/Settings";

// ✅ Connect to MongoDB before handling requests
connectDB();

// 📌 Fetch testimonies (GET)
export async function GET() {
  try {
    const settings = await Settings.findOne();
    return NextResponse.json(settings?.testimonies || [], { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch testimonies" }, { status: 500 });
  }
}

// 📌 Add a new testimony (POST)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Incoming POST Body:", body); // Debugging log

    const { name, position, message, rating } = body;

    if (!name || !position || !message || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Invalid testimony data", body }, { status: 400 });
    }

    let settings = await Settings.findOne();

    if (!settings) {
      console.log("No settings found, creating default settings...");
      settings = new Settings({ 
        websiteName: "Sparkle", // ✅ Ensure websiteName is set
        testimonies: [] 
      });
    }

    if (!settings.websiteName) {
      settings.websiteName = "Sparkle"; // ✅ Ensure websiteName exists before saving
    }

    settings.testimonies.push({ name, position, message, rating });
    await settings.save();

    return NextResponse.json({ message: "Testimony added", testimony: { name, position, message, rating } }, { status: 201 });
  } catch (error) {
    console.error("Error adding testimony:", error);
    return NextResponse.json({ error: "Failed to add testimony" }, { status: 500 });
  }
}


// 📌 Update a testimony (PUT)
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { index, name, position, message, rating } = body;

    if (index === undefined || index < 0 || !name || !position || !message || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Invalid testimony data" }, { status: 400 });
    }

    const settings = await Settings.findOne();
    if (!settings || index >= settings.testimonies.length) {
      return NextResponse.json({ error: "Invalid testimony index" }, { status: 404 });
    }

    settings.testimonies[index] = { name, position, message, rating };
    await settings.save();

    return NextResponse.json({ message: "Testimony updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update testimony" }, { status: 500 });
  }
}

// 📌 Delete a testimony (DELETE)
export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { index } = body;

    if (index === undefined) {
      return NextResponse.json({ error: "Index is required" }, { status: 400 });
    }

    const settings = await Settings.findOne();
    if (!settings || index < 0 || index >= settings.testimonies.length) {
      return NextResponse.json({ error: "Invalid testimony index" }, { status: 404 });
    }

    settings.testimonies.splice(index, 1);
    await settings.save();

    return NextResponse.json({ message: "Testimony removed" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to remove testimony" }, { status: 500 });
  }
}