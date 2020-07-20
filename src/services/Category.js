import { client } from "./secviceConfig";

export const categoryList = () => client.get("get-category");

export const subCategoryList = () => client.get("get-sub-category");
