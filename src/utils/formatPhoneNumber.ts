const cityCodes = [
  "495",
  "812",
  "383",
  "4232",
  "844",
  "343",
  "342",
  "381",
  "3430",
  "346",
  "347",
  "421",
  "844",
  "831",
  "8312",
  "846",
  "855",
  "8316",
  "815",
  "841",
  "471",
  "473",
  "446",
  "492",
  "347",
  "383",
  "421",
  "481",
  "489",
  "473",
  "477",
  "445",
  "482",
  "488",
  "481",
  "493",
  "4812",
  "4813",
  "4814",
  "4815",
  "4822",
  "4825",
  "491",
  "4912",
  "4915",
  "494",
  "4917",
  "4933",
  "4931",
  "4935",
  "4937",
  "4242",
  "3452",
  "422",
  "863",
  "474",
  "3465",
  "3425",
  "3433",
  "3412",
  "3431",
  "3434",
  "3423",
  "3417",
  "3470",
  "327",
  "4234",
  "338",
  "331",
  "333",
  "3422",
  "3435",
  "4237",
  "315",
  "319",
  "332",
  "431",
  "433",
  "434",
  "4226",
  "4239",
  "475",
  "472",
  "4918",
  "4925",
  "4955",
  "490",
  "499",
  "391",
  "397",
  "3912",
  "3915",
  "392",
  "385",
  "3852",
  "384",
  "3921",
  "3911",
  "420",
  "4314",
  "4238",
  "4231",
  "4312",
  "4944",
  "4922",
  "4957",
  "496",
  "4914",
  "480",
  "4221",
  "4212",
  "419",
  "413",
  "412",
];

function formatPhoneNumber(
  phoneNumber: string | undefined,
  isLink: boolean = false,
) {
  if (!phoneNumber) {
    return phoneNumber;
  }

  if (isLink) {
    let digits = phoneNumber.replace(/\D/g, "");

    if (digits.charAt(0) === "8") {
      digits = "7" + digits.slice(1);
    }

    if (digits.length !== 11) {
      return phoneNumber;
    }

    return `+7${digits.slice(1)}`;
  }

  let digits = phoneNumber.replace(/\D/g, "");

  if (digits.charAt(0) === "7") {
    digits = "7" + digits.slice(1);
  } else if (digits.charAt(0) === "8") {
    digits = "8" + digits.slice(1);
  }

  if (digits.length !== 11) {
    return phoneNumber;
  }

  const cityCode4 = digits.slice(1, 5);
  const isCityCode4 = cityCodes.includes(cityCode4);

  if (isCityCode4) {
    return `8 (${cityCode4}) ${digits.slice(5, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
  }

  const cityCode3 = digits.slice(1, 4);
  const isCityCode3 = cityCodes.includes(cityCode3);

  if (isCityCode3) {
    return `8 (${cityCode3}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
  }

  return `8 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
}

export default formatPhoneNumber;
