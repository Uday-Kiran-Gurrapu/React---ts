import ProfileForm from "../components/ProfileForm";
import { useProfile } from "../context/ProfileContext";

function ProfilePage() {
  const { savedProfile, saveProfile, clearProfile } = useProfile();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Profile</h2>

      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <ProfileForm onSave={saveProfile} />
      </div>

      {savedProfile ? (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 space-y-3">
          <h3 className="text-lg font-semibold text-white">Saved Profile</h3>
          <p className="text-sm text-gray-400">
            Name:{" "}
            <span className="text-gray-200 font-medium">{savedProfile.name}</span>
          </p>
          <p className="text-sm text-gray-400">
            Email:{" "}
            <span className="text-gray-200 font-medium">{savedProfile.email}</span>
          </p>
          <button
            onClick={clearProfile}
            className="mt-1 px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Clear Profile
          </button>
        </div>
      ) : (
        <p className="text-gray-500">No profile saved yet.</p>
      )}
    </div>
  );
}

export default ProfilePage;
