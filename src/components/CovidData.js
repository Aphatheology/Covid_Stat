import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "../store/reducers/fetchDataReducer";
import { useEffect } from "react";

const CovidData = () => {
    const { data, isLoading } = useSelector((store) => store.fetchData);

  const dispatch = useDispatch();

  console.log(data);
  useEffect(() => {
    dispatch(fetchApiData());
    
  }, [dispatch]);

  if (isLoading) return <h1>loading...</h1>;
    return (
        <div className="coviddata">
            <h2>CovidData</h2>

            <div className="stat-container">
                <div className="each-stat">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-check"
                        viewBox="0 0 16 16"
                    >
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        <path
                            fill-rule="evenodd"
                            d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                        />
                    </svg>

                    <div>
                        <p>Total Samples Tested</p>

                        <h3>{data?.data?.totalSamplesTested}</h3>
                    </div>
                </div>

                <div className="each-stat">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check-circle"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    </svg>

                    <div>
                        <p>Total Confirmed Cases</p>

                        <h3>{data?.data?.totalConfirmedCases}</h3>
                    </div>
                </div>

                <div className="each-stat">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-activity"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                        />
                    </svg>

                    <div>
                        <p>Total Active Cases</p>

                        <h3>{data?.data?.totalActiveCases}</h3>
                    </div>
                </div>

                <div className="each-stat">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-hearts"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"
                        />
                    </svg>

                    <div>
                        <p>Total Discharged</p>

                        <h3>{data?.data?.discharged}</h3>
                    </div>
                </div>

                <div className="each-stat">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-patch-minus"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                        />
                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                    </svg>

                    <div>
                        <p>Total Discharged</p>

                        <h3>{data?.data?.death}</h3>
                    </div>
                </div>
            </div>

            <div class="data-table">
                <h3>All Campaigns</h3>

                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <th> States </th>
                                <th>Confirmed Cases</th>
                                <th>cases on admission</th>
                                <th>discharged</th>
                                <th>death</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data?.data?.states?.map((eachState) => {
                                console.log(eachState)
                                return (
                                    <tr key={eachState._id}>
                                    <td> {eachState.state} </td>
                                    <td> {eachState.confirmedCases} </td>
                                    <td> {eachState.casesOnAdmission} </td>
                                    <td> {eachState.discharged} </td>
                                    <td> {eachState.death} </td>
                                </tr>
                                )
                            
                                
                                
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* </>
            )} */}
        </div>
    );
};

export default CovidData;
