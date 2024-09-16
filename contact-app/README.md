# `Contact Management App`
This is a simple Contact Management App built with Vite, React, and Firebase. 
The app allows users to perform CRUD (Create, Read, Update, Delete) operations on their contacts. 
It features form validation using Formik and Yup, and it provides feedback with react-toastify for 
every operation, such as adding, updating, and deleting contacts.

# Live Demo 🌐
View the live demo of project here: https://react-practice-projects-874b-5dyyv1teu-iqra-rasheeds-projects.vercel.app/

# Features ✨
**Add a Contact:** Users can add a contact (name and email) to the Firebase database.<br>
**View Contacts:** Displays a list of contacts stored in Firebase.<br>
**Search Contacts:** Users can search for contacts by name.<br>
**Update a Contact:** Users can update the details of an existing contact.<br>
**Delete a Contact:** Users can remove a contact from the database.<br>
**Modal Interface:** A modal form is used to add or update contacts.<br>
**Toaster Notifications:** Displays toast notifications on contact addition, update, or deletion.<br>

# Tech Stack 🔥
Framework: Vite<br>
Frontend Library: React<br>
CSS Framework: Tailwind CSS<br>
Firebase: Firestore Database<br>
Deployment: Vercel

# Setup and Installation 🛠
<h2>Clone the repository</h2>
git clone https://github.com/Iqra327/React-Practice-Projects.git

<h2>Navigate to the Contact App directory</h2>
cd React-Practice-Projects/contact-app

<h2>Install Dependencies</h2>
npm install

<h2>Firebase Configuration</h2>
Make sure to add your Firebase credentials in a .env.local file at the root of the project. Here's an example of the variables you need to include:

VITE_FIREBASE_API_KEY=your-api-key<br>
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain<br>
VITE_FIREBASE_PROJECT_ID=your-project-id<br>
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket<br>
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id<br>
VITE_FIREBASE_APP_ID=your-app-id<br>

<h2>Running the Project Locally</h2>
To start the development server:<br>
npm run dev

# Usage 📝
<h2>Add Contact:</h2><br>
Click the + button in the top-right corner.<br>
Fill in the name and email fields.<br>
Click "Add Contact".<br>
A success toast notification will appear.<br>

<h2>Update Contact:</h2><br>
Click the edit icon next to any contact.<br>
Update the name or email.<br>
Click "Update Contact".<br>
A success toast notification will appear.<br>

<h2>Delete Contact:</h2>
Click the trash icon next to a contact.<br>
A success toast notification will confirm the deletion.<br>
