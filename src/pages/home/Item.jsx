import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BASE_URL, axiosInstance } from "../../utils/axiosIntance";
import Title from "../../components/Title";
import { Downloading, AutoStories } from "@mui/icons-material";

import DocViewer, {
  DocViewerRenderers,
  PDFRenderer,
  PNGRenderer,
  DocRenderer,
} from "@cyntler/react-doc-viewer";

const Item = () => {
  const history = useHistory();
  const { id } = useParams();
  const [item, setItem] = useState();
  const [read, setRead] = useState(false);

  // const docs = [
  //   { uri: "https://url-to-my-pdf.pdf" }, // Remote file
  //   { uri: require("./example-files/pdf.pdf") }, // Local File
  // ];

  useEffect(() => {
    getItem();
  }, [id]);

  const getItem = () => {
    axiosInstance
      .get("/api/item/" + id)
      .then((data) => {
        console.log(data.data);
        setItem(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const downloadFile = () => {
    window.open(BASE_URL + item?.CategoryItemFiles[0].filename, "_blank");

    // axiosInstance
    //   .get("/api/item/download/" + item?.id)
    //   .then((data) => {
    //     console.log(data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const MyLoadingRenderer = ({ document, fileName }) => {
    const fileText = fileName || document?.fileType || "";

    if (fileText) {
      return <div>Loading Renderer ({fileText})...</div>;
    }

    return <div>Loading Renderer...</div>;
  };

  return (
    <div className="w-full">
      <Title text={item?.Category?.name_tm} />

      <div className="w-full mt-10 flex justify-start gap-8 items-start">
        <img
          className="w-[250px] object-contain rounded-[12px]"
          src={BASE_URL + item?.placeholder}
          alt=""
        />
        <div className="w-full">
          <h1 className="text-black text-[30px]">{item?.name_tm}</h1>

          <div className="w-full my-8">
            <div className="flex w-full my-4 items-center justify-between">
              <p className="w-[100px]  text-[16px] text-black font-[400]">
                Awtor:
              </p>
              <h1 className="w-full text-[16px] text-black font-[600]">
                {item?.author}
              </h1>
            </div>

            <div className="flex w-full my-4 items-center justify-between">
              <p className="w-[100px] text-[16px] text-black font-[400]">
                Ýyly:
              </p>
              <h1 className="w-full text-[16px] text-black font-[600]">
                {item?.year}
              </h1>
            </div>

            <div className="flex w-full my-4 items-center justify-between">
              <p className="w-[100px] text-[16px] text-black font-[400]">
                Neşiriýat:
              </p>
              <h1 className="w-full text-[16px] text-black font-[600]">
                {item?.publishing}
              </h1>
            </div>
          </div>

          <div className="flex gap-4 justify-start items-center">
            <button
              onClick={() => downloadFile()}
              className="bg-main flex gap-3 items-center text-white rounded-[5px] text-[18px] py-2 px-7"
            >
              <Downloading className="text-white" /> Ýükle
            </button>
            <button
              onClick={() => setRead(true)}
              className="bg-main flex gap-3 items-center text-white rounded-[5px] text-[18px] py-2 px-7"
            >
              <AutoStories className="text-white" /> Oka
            </button>
          </div>
        </div>
      </div>

      {read && (
        <div className="w-full mt-2 p-2 h-[75vh] overflow-y-auto scrollbar-hide">
          {/* <div dangerouslySetInnerHTML={{ __html: item?.text_tm }} /> */}
          <DocViewer
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            documents={[{ uri: BASE_URL + item?.placeholder }]}
            // initialActiveDocument={
            //   BASE_URL + item?.CategoryItemFiles[0]?.filename
            // }
            // activeDocument={BASE_URL + item?.placeholder}
            // pluginRenderers={DocViewerRenderers}
            pluginRenderers={[PDFRenderer, PNGRenderer]}
            theme={{
              primary: "#5296d8",
              secondary: "#ffffff",
              tertiary: "#5296d899",
              textPrimary: "#ffffff",
              textSecondary: "#5296d8",
              textTertiary: "#00000099",
              disableThemeScrollbar: false,
            }}
            // prefetchMethod="GET"
            // config={{
            //   header: {
            //     disableHeader: false,
            //     disableFileName: false,
            //     retainURLParams: false,
            //   },
            //   csvDelimiter: ",", // "," as default,
            //   pdfZoom: {
            //     defaultZoom: 1.1, // 1 as default,
            //     zoomJump: 0.2, // 0.1 as default,
            //   },
            //   pdfVerticalScrollByDefault: true, // false as default
            //   loadingRenderer: {
            //     overrideComponent: MyLoadingRenderer,
            //   },
            // }}
          />
        </div>
      )}
    </div>
  );
};

export default Item;
