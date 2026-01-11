
function Tours({tours,removeTour}) {
    return(
        <div>
            
            <div>
                <h2>Plan With Love</h2>
            </div>

            {/* rather than typing seven diffrent - diffrent card  using map function */}
            <div>

                    {
                        tours.map((tour) => {
                            return <card {...tour} removeTour={removeTour}></card>
                        })
                    }

            </div>



        </div>

    );

}

export default Tours;