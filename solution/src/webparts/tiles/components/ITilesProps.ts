import { WebPartContext } from '@microsoft/sp-webpart-base';
import { ITilesWebPartProps } from './../TilesWebPart';
import { DisplayMode } from '@microsoft/sp-core-library';

export interface ITilesProps extends ITilesWebPartProps {
  displayMode: DisplayMode;
  updateProperty: (value: string) => void;
  context: WebPartContext;
}
