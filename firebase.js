const firebaseConfig = {
  apiKey: "AIzaSyD0-cdSRzj0wzNQAXpwWVUa0ojosWKNggs",
  authDomain: "to-do-live-72e8e.firebaseapp.com",
  projectId: "to-do-live-72e8e",
  storageBucket: "to-do-live-72e8e.appspot.com",
  messagingSenderId: "613702269183",
  appId: "1:613702269183:web:d5373affeaa29d3d5d74ca",
  measurementId: "G-HECK5N1Y2D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
