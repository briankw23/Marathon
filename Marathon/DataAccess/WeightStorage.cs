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

        public void DeleteWeights(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                connection.Execute(@"delete
                                        from Weights
                                        where Id = @id", new { id });
            }
        }
        public void UpdateWeightsTask(Weights weights)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                connection.Execute(@"update weights set Name = @Name, Description = @Description, Date = @Date, TargetReps = @TargetReps, ActualReps = @ActualReps, Complete = @Complete where Id = @id", weights);
            }

        }
    }

}

