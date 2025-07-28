"use client";

import { useEffect, useState } from "react";

interface Props {
  fileUrl: string;
  token?: string;
}

export function PdfViewer({ fileUrl, token }: Props) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const res = await fetch(fileUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch PDF");

        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        setBlobUrl(url);
      } catch (err) {
        console.error("Error loading PDF", err);
      }
    };

    fetchPdf();

    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileUrl, token]);

  if (!blobUrl)
    return (
      <div className="w-full h-[500px] flex items-center justify-center border rounded shadow">
        <p className="text-secondary text-lg">Loading PDF...</p>
      </div>
    );

  return (
    <iframe
      src={blobUrl}
      className="w-full h-[500px] border rounded-lg"
      title="PDF Document"
    />
  );
}
