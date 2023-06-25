"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import DownloadAsset from "../DownloadAsset";
import ModalTrigger from "./ModalTrigger";
import { VideoCardModalProps } from "./interface";

function VideoCardModal({ data }: VideoCardModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <ModalTrigger data={data} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-md" />
        <Dialog.Content className="fixed inset-0 m-auto flex h-fit w-full max-w-[600px] flex-col items-center justify-center rounded-xl border-t-[12px] border-primary-blue-300 bg-white shadow-lg">
          <Dialog.Close className="absolute right-4 top-3 rounded-full p-2 transition-all hover:bg-zinc-200 hover:opacity-80">
            <X size={16} color={"#000"} weight="bold" />
          </Dialog.Close>
          <Dialog.Title className="px-4 py-6 text-center text-xl font-bold text-black md:px-20 md:text-2xl">
            <span className="text-primary-blue-300">Webinar:</span> {data.title}
          </Dialog.Title>
          <iframe
            className="aspect-video w-full"
            src={data.video}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          <div className="w-full p-6">
            <h1 className="mb-2 border-b border-gray-bd pb-1 text-base font-bold">
              Descrição
            </h1>
            <p className="mb-4 text-base font-medium">{data.description}</p>

            <h1 className="mb-4 border-b border-gray-bd pb-1 text-base font-bold">
              Downloads
            </h1>
            <div className="flex flex-row flex-wrap gap-3">
              {data.assets.map((asset, index) => (
                <DownloadAsset
                  key={`${index}-${asset.name}`}
                  file={asset.name}
                  path={asset.url}
                />
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default VideoCardModal;
