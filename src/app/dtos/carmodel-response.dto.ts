/**********************************************************************
Name: carmodel-response.dto.ts
Copyright © 2024 

Purpose:
This DTO will create a skeleton of our response when we call the /model.
This skeleton is based the information retrieve found in the file main.ts.

History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024         DTO Response.		
***********************************************************************/
export type CarModelDTO = {
  code: string;
  description: string;
  colors: ColorModelDTO[];
};

export type ColorModelDTO = {
  code: string;
  description: string;
  price: number;
};
