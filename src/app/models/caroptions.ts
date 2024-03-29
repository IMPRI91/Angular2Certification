/**********************************************************************
Name: caroptions.ts
Copyright © 2024 

Purpose:
This Model will be used to map the response when we call the /options/$id.

History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024         Model Class.		
***********************************************************************/
export type CarOptions = {
  configs: Options[];
  towHitch: boolean;
  yoke: boolean;
};
export type Options = {
  id: number;
  description: string;
  range: number;
  speed: number;
  price: number;
};
