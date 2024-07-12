import * as React from "react";
import { Button } from "@/components/ui/buttonsd";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/inputcd";

export function DrawerDemo() {
  return (
    <div className="flex items-center justify-center">
      <Drawer>
        <DrawerTrigger asChild className="mt-2 mb-10">
          <Button variant="outline">Connect with Us</Button>
        </DrawerTrigger>
    
        <DrawerContent>
          <div className="mx-auto w-full max-w-md">
            <DrawerHeader>
              <DrawerTitle>Let's Connect!</DrawerTitle>
              <DrawerDescription>We're here to help you on your journey. Drop us a message and we'll get back to you shortly.</DrawerDescription>
            </DrawerHeader>
            <div className="space-y-4">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <textarea
                placeholder="Your Query"
                className="w-full h-32 p-2 border rounded-md bg-black"
              />
            </div>
            <DrawerFooter>
              <Button type="submit">Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}