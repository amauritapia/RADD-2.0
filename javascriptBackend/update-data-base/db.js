import {Pool} from "pg";

export default new Pool({
    user: "posgresLogin",
    password: "passwordplop",
    host: "java-react-200526.cynb2exc9xns.us-east-2.rds.amazonaws.com",
    port: 5432,
    database: "postgres"
});