import { ColorRing } from "react-loader-spinner";

export default function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
}