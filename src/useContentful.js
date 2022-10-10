import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "w0jkell9htz6",
    accessToken: "OJGDR8atHBhRNjdm0-PWxlLnIb7wU5OH60bAuobGBjE",
    host: "preview.contentful.com",
  });

  const getFood = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "cityFood",
        select: "fields",
      });
      const filteredItems = entries.items.map((item) => {
        const foodImg = item.fields.foodImg.fields;

        return {
          ...item.fields,
          foodImg,
        };
      });
      return filteredItems;
    } catch (error) {
      console.log(error);
    }
  };

  const getVisit = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "cityVisit",
        select: "fields",
      });
      const filteredItems = entries.items.map((item) => {
        const visitImg = item.fields.visitImg.fields;

        return {
          ...item.fields,
          visitImg,
        };
      });
      return filteredItems;
    } catch (error) {
      console.log(error);
    }
  };

  return { getFood, getVisit };
};

export default useContentful;
