"use client";

import { getTimeDistanceFromNow } from "@school-wits/utils";
import { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { Notice } from "../../../types";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../client-ui";

interface NoticeModalProps {
  notices: Notice[];
}

export function NoticeModal({ notices }: NoticeModalProps) {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-x-4 w-full select-none items-center justify-center rounded-lg p-4 bg-white border border-neutral-200 shadow-md cursor-pointer">
          <div className="p-3.5 rounded-full bg-[#f9731633]">
            <IoMdNotifications className="scale-[1.35] text-[#f97316]" />
          </div>
          <span className="text-lg font-semibold">Notices</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {selectedNotice ? selectedNotice.title : "Notices"}
          </DialogTitle>
          <DialogDescription className="sr-only">Notice List</DialogDescription>
        </DialogHeader>
        {selectedNotice ? (
          <div>
            <p className="text-xs text-neutral-700">
              {getTimeDistanceFromNow(selectedNotice.createdAt)}
            </p>
            <div className="max-h-[50vh] overflow-y-auto my-4">
              {selectedNotice.details}
            </div>
          </div>
        ) : (
          <div className="max-h-[50vh] overflow-y-auto py-4">
            {notices.length > 0 ? (
              <div className="space-y-4">
                {notices.map((notice) => (
                  <button
                    key={notice.id}
                    className="p-4 w-full block text-start border border-neutral-200 rounded-lg shadow-sm cursor-pointer hover:shadow-md"
                    onClick={() => setSelectedNotice(notice)}
                  >
                    <p className="line-clamp-1 text-lg">{notice.title}</p>
                    <p className="text-xs text-neutral-700">
                      {getTimeDistanceFromNow(notice.createdAt)}
                    </p>
                  </button>
                ))}
              </div>
            ) : (
              <div className="w-full h-20 md:h-32 flex items-center justify-center text-lg md:text-xl font-bold text-neutral-400">
                You don&apos;t have any notices
              </div>
            )}
          </div>
        )}
        <DialogFooter>
          {selectedNotice && (
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setSelectedNotice(null)}
            >
              Back
            </Button>
          )}
          <DialogClose asChild>
            <Button variant="destructive" size="lg">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
