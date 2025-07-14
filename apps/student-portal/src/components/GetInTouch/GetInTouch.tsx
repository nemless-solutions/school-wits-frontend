"use client";

import { appointmentSchema } from "@school-wits/validations";
import { useState } from "react";
import { toast } from "react-toastify";
import CircleGroup from "../../../public/graphics/circle-group-3.svg";
import CurvedLine2 from "../../../public/graphics/curve-line-2.svg";
import CurvedLine from "../../../public/graphics/curve-line.svg";
import SquareGroup from "../../../public/graphics/square-group.svg";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  MotionDiv,
} from "../client-ui";
import { AppointmentForm } from "../Forms/AppointmentForm";

export function GetInTouch() {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (data: {
    fullName: string;
    email: string;
    contact: string;
    message: string;
  }) => {
    const res = await fetch("https://backend.schoolwits.com/contact_request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success("Message sent successfully");
      setOpen(false);
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="my-6 md:my-20 py-20 relative">
      <div className="w-[100px] h-[120px] md:w-[172px] md:h-[211px] absolute left-[-60px] top-[-60px] md:top-[-120px] md:left-[-120px] bg-primary rounded-xl rotate-[40deg]" />
      <div className="bg-secondary mx-3 md:mx-8 py-6 md:py-12 rounded-[12px] sm:rounded-2xl relative overflow-clip">
        <CurvedLine className="absolute hidden md:block w-[180px] top-0 right-0 text-primary" />
        <CurvedLine2 className="absolute w-[160px] md:w-[180px] bottom-0 left-0 text-primary" />
        <SquareGroup className="absolute w-10 md:w-16 text-[#FEA9ED] bottom-[-4px] right-[-4px] md:bottom-6 md:right-1/7" />
        <CircleGroup className="absolute w-10 md:w-16 top-[-4px] left-[calc(100%-30px)] md:top-6 md:left-1/7 text-primary" />
        <div className="main-container relative z-10">
          <div className="text-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-white capitalize font-recoleta">
                Let&apos;s Get In Touch
              </h2>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="text-white font-medium my-4">
                Meet our expert to get consultation for FREE
              </p>
            </MotionDiv>

            <Dialog open={open} onOpenChange={setOpen}>
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, easings: "easeInOut", delay: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Button
                  size="lg"
                  className="text-sm md:text-lg text-black font-semibold"
                  asChild
                >
                  <DialogTrigger>Schedule a Call</DialogTrigger>
                </Button>
              </MotionDiv>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule a Call Now</DialogTitle>
                </DialogHeader>
                <AppointmentForm
                  schema={appointmentSchema}
                  defaultValues={{
                    fullName: "",
                    email: "",
                    contact: "",
                    message: "",
                  }}
                  onSubmit={handleSubmit}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
