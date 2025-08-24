"use client";

import { createComment } from "@/app/action";
import { useActionState } from "react";

const initialState = {
  error: "",
};

const CommentForm = () => {
  const [state, formAction, pending] = useActionState(
    createComment,
    initialState
  );

  return (
    <form className="flex flex-col w-72" action={formAction}>
      {state?.error && (
        <div className="text-red-500" role="alert">
          {state.error}
        </div>
      )}
      <textarea
        placeholder=""
        className="w-full h-40 border border-dark mb-4 text-black"
        name="comment"
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
        disabled={pending}
      >
        {pending ? "Mengirim..." : "Kirim"}
      </button>
    </form>
  );
};

export default CommentForm;
