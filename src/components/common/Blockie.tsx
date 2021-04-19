import { useEffect, useRef } from "react";
import blockies from "ethereum-blockies";

type Props = {
  isRound?: boolean;
  opts?: {
    seed: string;
    color: string;
    bgcolor: string;
    size: number;
    scale: number;
    spotcolor: string;
  };
};

const BlockiesIdenticon: React.FC<Props> = (props) => {
  const { opts, isRound } = props;
  const canvas = useRef<HTMLCanvasElement>(null);

  const getOpts = () => {
    return {
      seed: opts?.seed || "apyvision",
      color: opts?.color || "#248c3a",
      bgcolor: opts?.bgcolor || "#f66884",
      size: opts?.size || 8,
      scale: opts?.scale || 3,
      spotcolor: opts?.spotcolor || "#daa615",
    };
  };

  const drawBlockie = () => {
    blockies.render(getOpts(), canvas.current);
  };

  useEffect(() => {
    drawBlockie();
  }, []);

  return (
    <canvas
      ref={canvas}
      style={{ borderRadius: isRound ? "50%" : "inherit" }}
    />
  );
};

export default BlockiesIdenticon;
