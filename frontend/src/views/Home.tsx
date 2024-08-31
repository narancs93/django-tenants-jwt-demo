import { useEffect, useState } from "react";
import useApi from "../utils/useApi";
import {
  FlexBox,
  Table,
  TableCell,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
} from "@ui5/webcomponents-react";

interface Cloth {
  id: number;
  name: string;
  price: string;
  description: string;
  stock: number;
  category: number;
}

function Home() {
  const api = useApi();

  const [clothes, setClothes] = useState<Cloth[]>([]);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const abortController = new AbortController();

    const fetchClothes = () => {
      setIsLoading(true);

      api
        .get("api/clothes", {
          signal: abortController.signal,
        })
        .then((response) => {
          setClothes(response?.data);
          setError("");
        })
        .catch((error) => {
          if (error.name === "CanceledError") {
            console.log("Fetch aborted");
            return;
          }
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    };

    fetchClothes();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <FlexBox
      direction="Column"
      alignItems="Center"
      justifyContent="Center"
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <Table
        headerRow={
          <TableHeaderRow sticky>
            <TableHeaderCell>
              <span>ID</span>
            </TableHeaderCell>
            <TableHeaderCell>
              <span>Name</span>
            </TableHeaderCell>
            <TableHeaderCell>
              <span>Price</span>
            </TableHeaderCell>
            <TableHeaderCell>
              <span>Description</span>
            </TableHeaderCell>
            <TableHeaderCell>
              <span>Stock</span>
            </TableHeaderCell>
          </TableHeaderRow>
        }
      >
        {clothes.map((cloth) => (
          <TableRow key={cloth.id}>
            <TableCell>{cloth.id}</TableCell>
            <TableCell>{cloth.name}</TableCell>
            <TableCell>{cloth.price}</TableCell>
            <TableCell>{cloth.description}</TableCell>
            <TableCell>{cloth.stock}</TableCell>
          </TableRow>
        ))}
      </Table>
    </FlexBox>
  );
}

export default Home;
