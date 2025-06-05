import { auth } from "@/auth";

export default async function Profile() {
  const session = await auth();

  const res = await fetch(`${process.env.BASE_URL}/auth`, {
    headers: {
      Authorization: `Bearer ${session?.token}`,
    },
  });

  if (!res.ok) return null;

  const userInfo = await res.json();

  return (
    <div>
      <section className="bg-primary pt-32 pb-20">
        <div className="main-container">
          <h1 className="text-center text-3xl md:text-4xl font-semibold text-neutral-50">
            My Profile
          </h1>
        </div>
      </section>
      <section className="bg-neutral-100 py-20">
        <div className="main-container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-clip shadow-md/20 text-primary p-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
                Personal Information
              </h2>
              <div className="text-lg md:text-xl text-primary space-y-2 font-semibold">
                <p>ID: {userInfo.uid}</p>
                <p>Name: {userInfo.fullName}</p>
                <p>Email: {userInfo.email}</p>
                <p>School: {userInfo.currentSchool}</p>
                <p>Grade: {userInfo.grade}</p>
                <p>Date of Birth: {userInfo.dateOfBirth}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-clip shadow-md/20 text-primary p-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
                Guardian&apos;s Information
              </h2>
              <div className="text-lg md:text-xl text-primary font-semibold space-y-2">
                <p>Father&apos;s Name: {userInfo.fatherName}</p>
                <p>Mother&apos;s Name: {userInfo.motherName}</p>
                <p>Guardian&apos;s Email: {userInfo.guardianEmail}</p>
                <p>Guardian&apos;s Contact: {userInfo.guardianContact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
