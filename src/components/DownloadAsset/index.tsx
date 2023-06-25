import clsx from "clsx";
import { CloudArrowDown } from "phosphor-react";

function DownloadAsset({ file, path }: { file: string; path: string }) {
  const extension = file.split(".")[1];

  const handleIconColor = () => {
    switch (extension) {
      case "xls":
        return "#00AE7F";
      case "ppt":
        return "#A68E1C";
      case "doc":
        return "#0073EA";
      default:
        return "#77848C";
    }
  };

  return (
    <a
      className="flex cursor-pointer flex-row items-center justify-center rounded-lg transition-all hover:opacity-80"
      href={path}
      download
    >
      <div
        className={clsx("flex items-center justify-center rounded-l-lg p-1.5", {
          "bg-asset-green-medium": extension === "xls",
          "bg-asset-blue-medium": extension === "doc",
          "bg-asset-yellow-medium": extension === "ppt",
          "bg-asset-gray-medium": extension === "zip",
        })}
      >
        <CloudArrowDown size={20} color={handleIconColor()} weight="regular" />
      </div>
      <div
        className={clsx(
          "flex items-center justify-center rounded-r-lg px-2 py-1.5",
          {
            "bg-asset-green-light": extension === "xls",
            "bg-asset-blue-light": extension === "doc",
            "bg-asset-yellow-light": extension === "ppt",
            "bg-asset-gray-light": extension === "zip",
          }
        )}
      >
        <span
          className={clsx("text-sm font-medium", {
            "text-asset-green-dark": extension === "xls",
            "text-asset-blue-dark": extension === "doc",
            "text-asset-yellow-dark": extension === "ppt",
            "text-asset-gray-dark": extension === "zip",
          })}
        >
          {file}
        </span>
      </div>
    </a>
  );
}

export default DownloadAsset;
