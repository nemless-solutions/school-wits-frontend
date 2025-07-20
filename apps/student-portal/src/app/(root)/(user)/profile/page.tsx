import { auth } from "@/auth";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { PasswordChange } from "@/components/PasswordChange/PasswordChange";
import { baseUrl } from "@/constants";
import { fetcher } from "@/libs/fetcher";
import { cn } from "@school-wits/utils";
import { User } from "../../../../../types";

export default async function Profile() {
  const session = await auth();
  const userInfo = await fetcher<User>(`${baseUrl}/auth`, session?.token);

  return (
    <div>
      <PageHeader header="Profile" />
      <section className="bg-neutral-100 py-20">
        <div className="main-container">
          <div className="max-w-[1000px] mx-auto space-y-4">
            <Card className="flex flex-wrap-reverse">
              <div className="flex-1">
                <h2 className="text-xl md:text-3xl font-semibold mb-2">
                  {userInfo?.fullName}
                </h2>
                <p className="md:text-lg">{userInfo?.email}</p>
              </div>
              <PasswordChange token={session?.token} />
            </Card>
            <Card>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Academic Informations
              </h2>
              <div className="md:text-lg flex gap-4 md:ml-4">
                <div className="font-semibold">
                  <p>Current School</p>
                  <p>Curriculum</p>
                  <p>Grade</p>
                </div>
                <div>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div>
                  <p>{userInfo?.currentSchool}</p>
                  <p>{userInfo?.curriculum}</p>
                  <p>{userInfo?.grade}</p>
                </div>
              </div>
            </Card>
            <Card>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Guardian&apos;s Informations
              </h2>
              <div className="md:text-lg flex gap-4 md:ml-4">
                <div className="font-semibold">
                  <p>Father&apos;s Name</p>
                  <p>Mother&apos;s Name</p>
                  <p>Guardian&apos;s Email</p>
                  <p>Guardian&apos;s Contact</p>
                </div>
                <div>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div>
                  <p>{userInfo?.fatherName}</p>
                  <p>{userInfo?.motherName}</p>
                  <p>{userInfo?.guardianEmail}</p>
                  <p>{userInfo?.guardianContact}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "p-4 md:p-8 rounded-lg bg-white border border-neutral-200 shadow-md",
        className
      )}
      {...props}
    >
      {props.children}
    </div>
  );
}
