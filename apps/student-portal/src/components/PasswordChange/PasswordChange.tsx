"use client";

import { baseUrl } from "@/constants";
import { cn } from "@school-wits/utils";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
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
  Input,
  Label,
} from "../client-ui";

interface PasswordChangeProps {
  token?: string;
  className?: string;
}

export function PasswordChange({ token, className }: PasswordChangeProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [errorMessages, setErrorMessages] = useState("");

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setErrorMessages("");
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async function (e?: React.FormEvent<HTMLFormElement>) {
    e && e.preventDefault();

    if (!passwords.currentPassword)
      return setErrorMessages("Current Password is required");
    if (!passwords.newPassword)
      return setErrorMessages("New Password is required");
    if (!passwords.confirmNewPassword)
      return setErrorMessages("Confirm Password is required");
    if (passwords.newPassword !== passwords.confirmNewPassword)
      return setErrorMessages("Passwords do not match");

    try {
      setLoading(true);
      const res = await fetch(`${baseUrl}/auth/change-password`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passwords),
      });

      if (!res.ok) {
        console.error(await res.text());
        throw new Error("Something went wrong. Try again later.");
      }

      toast.success("Password changed successfully");
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("", className)}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary" size="sm">
            Change Password
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription className="sr-only">
              Change Password
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input
                onChange={handleChange}
                name="currentPassword"
                type="password"
                id="currentPassword"
              />
            </div>
            <div className="space-y-4">
              <Label htmlFor="currentPassword">New Password</Label>
              <Input
                onChange={handleChange}
                name="newPassword"
                type="password"
                id="newPassword"
              />
            </div>
            <div className="space-y-4">
              <Label htmlFor="confirmNewPassword">Confirm Password</Label>
              <Input
                onChange={handleChange}
                name="confirmNewPassword"
                type="password"
                id="confirmNewPassword"
              />
            </div>
            <button type="submit" className="sr-only">
              Submit
            </button>
          </form>
          <div className="min-h-6 mx-2 -my-4 text-destructive font-semibold text-sm">
            {errorMessages || null}
          </div>
          <DialogFooter>
            <Button
              className="w-[80px]"
              onClick={() => handleSubmit()}
              size="lg"
              variant="secondary"
            >
              {loading ? (
                <Loader2Icon className="animate-spin scale-150" />
              ) : (
                "Submit"
              )}
            </Button>
            <DialogClose asChild>
              <Button variant="destructive" size="lg">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
