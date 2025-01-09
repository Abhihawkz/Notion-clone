"use client";

import { useTransition } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { createNewDocument } from "@/actions/actions";

function NewDocument() {
    const [isPending , startTransaction] =useTransition()
    const router = useRouter()
    const handleNewDocumentClick = () => {
      startTransaction( async ()=>{
        const {docId} = await createNewDocument();
        router.push(`/doc/${docId}`)
      })
    }

  
  return (
    <Button onClick={handleNewDocumentClick} disabled={isPending}>{isPending ? "Creating...." : "New Document"}</Button>
  )
}

export default NewDocument;