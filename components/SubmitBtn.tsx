import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useTranslation } from "react-i18next";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const { t } = useTranslation();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full
                 outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opactity-65
                 dark:bg-white dark:bg-opacity-10"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {t("submit")}{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
