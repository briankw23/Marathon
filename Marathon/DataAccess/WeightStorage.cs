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
    public class WeightStorage
    {
        private readonly string ConnectionString;

        public WeightStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }
        //APIS
        //GET ALL Weights
        public List<Weights> GetAllWeightsTasks()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Weights>(@"select * from Weights");

                return result.ToList();
            }
        }
        public void AddAWeights(Weights weights)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                connection.Execute(@"insert into Weights(Name, Description, Date, TargetReps, ActualReps, Complete) values (@Name, @Description, @Date, @TargetReps, @ActualReps, @Complete)", weights);
            }
        }
    }
}
