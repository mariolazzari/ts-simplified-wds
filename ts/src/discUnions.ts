// Discriminated unions
type SuccessResponse = {
  status: "Success";
  data: {
    id: string;
    name: string;
  };
};

type ErrorResponse = {
  status: "Error";
  errorMessage: string;
};

type UserApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(res: UserApiResponse) {
  if (res.status === "Success") {
    console.log(res.data.name);
  } else {
    console.log(res.errorMessage?.length);
  }

  switch (res.status) {
    case "Success":
      console.log(res.data.name);
      break;

    case "Error":
      console.log(res.errorMessage);
      break;

    default:
      const check: never = res;
      console.log(check);
  }
}
