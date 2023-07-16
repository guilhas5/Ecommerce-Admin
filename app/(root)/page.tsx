"use client"

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import {UserButton} from "@clerk/nextjs"
 const SetupPage = () => {
  return (
      <div className="p-4">
        <Modal title="test" description="des test" isOpen={true} onClose={() => {}}>
    Children
        </Modal>

      </div>
  );
}
export default SetupPage