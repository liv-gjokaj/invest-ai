export default function UserProfileForm() {
  return (
    <div className="card">
      <h3>Your Profile</h3>

      <input placeholder="Age" />
      <input placeholder="Income" />
      <input placeholder="Risk Tolerance" />

      <button className="primary">Save Profile</button>
    </div>
  );
}
