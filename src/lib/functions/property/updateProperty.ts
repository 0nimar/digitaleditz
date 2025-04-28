import apiClient from "@/lib/functionapis/apiclient";

export async function UpdateProperty(
  form: any,
  productId: string
) {
  const { success, data } = form;
  console.log(success, data);
  if (!success) {
    throw new Error("invalid form data");
  }
  try {
    const response = await apiClient.put(
      `/inventory/update-item/${productId}`,
      data
    );
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to create property");
  }
  
}
