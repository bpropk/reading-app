import { useMemo } from "react";
import { curveBasis, line } from "d3-shape";
import { parse } from "react-native-redash";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { SCREEN_WIDTH } from "../constants/screen";
import {
  NUM_TABS,
  SCALE,
  TAB_BAR_HEIGHT,
} from "@src/constants/bottomNavConstant";

type GenerateTabShapePath = (
  position: number,
  adjustedHeight: number
) => string;

const generateTabShapePath: GenerateTabShapePath = (
  position,
  adjustedHeight
) => {
  const adjustedWidth = SCREEN_WIDTH / NUM_TABS;
  const tabX = adjustedWidth * position;

  const lineGenerator = line().curve(curveBasis);
  const tab = lineGenerator([
    [tabX - 100 * SCALE, 0],
    [tabX - (65 + 35) * SCALE, 0],
    [tabX - (50 - 10) * SCALE, -6 * SCALE],
    [tabX - (50 - 15) * SCALE, (adjustedHeight - 14) * SCALE],
    [tabX + (50 - 15) * SCALE, (adjustedHeight - 14) * SCALE],
    [tabX + (50 - 10) * SCALE, -6 * SCALE],
    [tabX + (65 + 35) * SCALE, 0],
    [tabX + 100 * SCALE, 0],
  ]);

  return `${tab}`;
};

const usePath = (isHiddenSelectedCurve?: boolean) => {
  const insets = useSafeAreaInsets();
  const tHeight = TAB_BAR_HEIGHT + insets.bottom;
  const adjustedHeight = tHeight - insets.bottom - 15;

  const containerPath = useMemo(() => {
    return `M0,0L${SCREEN_WIDTH},0L${SCREEN_WIDTH},0L${SCREEN_WIDTH},${tHeight}L0,${tHeight}L0,0`;
  }, [tHeight]);

  const curvedPaths = useMemo(() => {
    return Array.from({ length: NUM_TABS }, (_, index) => {
      const tabShapePath = generateTabShapePath(
        index + 0.5,
        isHiddenSelectedCurve ? 0 : adjustedHeight
      );
      return parse(`${tabShapePath}`);
    });
  }, [adjustedHeight, isHiddenSelectedCurve]);

  return { containerPath, curvedPaths, tHeight };
};

export default usePath;
