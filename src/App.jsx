import { gql, useQuery } from "@apollo/client"

const QUERY =gql`
query{
  authors{
    name
  }
}
`;
function App() {
  const {loading , data} = useQuery(QUERY);
  console.log({loading,data});
  return (
    <div>
    <h3>Weblog</h3>
    </div>
  )
}

export default App
