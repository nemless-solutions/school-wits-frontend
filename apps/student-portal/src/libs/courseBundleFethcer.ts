import { baseUrl } from "@/constants";

export async function courseBundleFetcher<T>(grade: string) {
  const res = await fetch(`${baseUrl}/course_bundle/grade/${grade}`);

  if (res.ok) {
    const data = await res.json();
    return data as T;
  } else {
    return null;
  }
}
