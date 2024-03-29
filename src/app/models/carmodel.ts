/**********************************************************************
Name: carmodel.ts
Copyright © 2024 

Purpose:
This Model will be used to map the response when we call the /model.

History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024         Model Class.		
***********************************************************************/
export type CarModel = {
  code: string;
  description: string;
  colors: ColorModel[];
};

export type ColorModel = {
  code: string;
  description: string;
  price: number;
};
