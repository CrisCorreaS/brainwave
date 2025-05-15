import { useEffect, useState } from "react";
import supabase from "../helper/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { trashIcon } from "../assets";

function Dashboard() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    const fetchUserAndMessages = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        console.error("Error fetching user", userError);
        return;
      }

      setCurrentUserId(user?.id);

      const { data, error: msgError } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (msgError) {
        console.error("Error fetching messages", msgError);
      } else {
        setMessages(data);
      }
    };

    fetchUserAndMessages();
  }, []);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate("/login");
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?"))
      return;

    setIsDeleting(true);
    try {
      const { error } = await supabase
        .from("contact_messages")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setMessages(messages.filter((msg) => msg.id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching messages", error);
      } else {
        setMessages(data);
      }
    };

    fetchMessages();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Manage contact form submissions
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link
              to="/register"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-center"
            >
              Register New Admin
            </Link>
            <button
              onClick={signOut}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Sign out
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Contact Form Submissions
              </h2>
              <span className="mt-1 sm:mt-0 px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                {messages.length}{" "}
                {messages.length === 1 ? "message" : "messages"} received
              </span>
            </div>
          </div>

          {messages.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-500">
                No messages yet. Check back later.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {messages.map((msg) => (
                <li
                  key={msg.id}
                  className="px-6 py-5 hover:bg-gray-50 transition-colors duration-150 relative"
                >
                  {currentUserId === "7a15523d-ae0b-40a3-b1c6-d688cbba27bf" && (
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      disabled={isDeleting}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 p-1 text-red-500 hover:text-red-700 transition-colors"
                      title="Delete message"
                    >
                      <img src={trashIcon} alt="Delete" className="h-5 w-5" />
                    </button>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-6">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Name</p>
                      <p className="mt-1 text-sm text-gray-600">{msg.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <p className="mt-1 text-sm text-gray-600">{msg.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Phone</p>
                      <p className="mt-1 text-sm text-gray-600">
                        {msg.phone || "-"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Company
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        {msg.company || "-"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Country
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        {msg.country || "-"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Job Title
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        {msg.job_title || "-"}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pr-6">
                    <p className="text-sm font-medium text-gray-900">Message</p>
                    <p className="mt-1 text-sm text-gray-600 whitespace-pre-line">
                      {msg.message}
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-gray-500">
                      Submitted: {new Date(msg.created_at).toLocaleString()}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
