loadElection = (election_id, self) => {
  self.setState({ loading: true }, () =>
    axios({
      method: "get",
      url: process.env.REACT_APP_BACKUP_URL +
                "/" +
                election_id +
                "/header.json"
    })
      .then(response => {
        self.setState({ election: response.data, loading: false });
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
            axios({
              method: "get",
              url: process.env.REACT_APP_API_URL + "/election/" + election_id
                
            })
              .then(response => {
                self.setState({ election: response.data, loading: false });
              })
              .catch(error => {
                self.setState({ loading: false });
              });

          } else {
            self.setState({ loading: false });
          }
        })
  );
};