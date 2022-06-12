import { Form } from "antd";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import "yup-phone";
import CustomInput from "../CustomInput/index";
import CustomSelector from "../CustomSelector/index";

const initialState = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  district: "",
  phoneNumber: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Require."),
  lastName: Yup.string().required("Require."),
  address: Yup.string().required("Require."),
  city: Yup.string().required("Require."),
  district: Yup.string().required("Require."),
  phoneNumber: Yup.string().required("Require.").phone("VN", true, "Not a valid phone number."),
});

const AddressForm = () => {
  const [initialValues, setInitialValues] = useState(initialState);
  const [cityOptions, setCityOptions] = useState([]);
  const [districtOptions, setDistrictOptions] = useState([]);
  const [addressData, setAddressData] = useState([])

  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/?depth=2")
    .then(res => res.json())
    .then(data => {
      setAddressData(data)
      setCitySelectOptions(data)
    })
  }, []);

  const setCitySelectOptions = (data) => {
    const options = []
    for (let city of data) {
      options.push(city.name)
    }
    setCityOptions(options)
  }

  const setDistrictSelectOptions = (index) => {
    const city = addressData[index];
    const options = [];

    for (let district of city.districts) {
      options.push(district.name)
    }
    setDistrictOptions(options)
  }

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="d-grid-2">
          <CustomInput
            name="firstName"
            label="First Name"
            require={true}
            type="text"
          />
          <CustomInput
            name="lastName"
            label="Last Name"
            require={true}
            type="text"
          />
        </div>
        <CustomInput
          name="address"
          label="Address"
          require={true}
          type="text"
        />
        <div className="d-grid-2">
          <CustomSelector
            placeholder={"Select a city"}
            name="city"
            label="City"
            require={true}
            setDistrictSelectOptions={setDistrictSelectOptions}
            selectOptions={cityOptions}
          />
          <CustomSelector
            placeholder={"Select a district"}
            name="district"
            label="District"
            require={true}
            selectOptions={districtOptions}
          />
        </div>
        <div className="d-grid-2">
          <CustomInput
            name="phoneNumber"
            label="Phone Number"
            require={true}
            type="text"
          />
        </div>
        <button className="submit-btn">Save Changes</button>
      </Form>
    </Formik>
  );
};

export default AddressForm;
