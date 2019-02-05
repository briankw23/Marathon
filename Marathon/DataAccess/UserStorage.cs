using Dapper;
using Marathon.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Marathon.DataAccess
{
    public class UserStorage
    {
        private readonly string ConnectionString;

        public UserStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }
        //APIS

        public List<Users> GetSingle()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Users>(@"select *
                                                            from Users
                                                            Where Id = 1");

                return result.ToList();
            }
        }
    }
}
