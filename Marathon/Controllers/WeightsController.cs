using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Marathon.DataAccess;
using Marathon.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Marathon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeightsController : ControllerBase
    {
        private readonly WeightStorage _storage;

        public WeightsController(IConfiguration config)
        {
            _storage = new WeightStorage(config);
        }

        // GET ALL Weights
        [HttpGet]
        public IActionResult GetAllWeights()
        {
            return Ok(_storage.GetAllWeightsTasks());
        }
        [HttpPost]
        public void AddWeightsTask([FromBody] Weights weights)
        {
            _storage.AddAWeights(weights);
        }
        [HttpDelete("{id}")]
        public void DeleteWeightsTask(int id)
        {

            _storage.DeleteWeights(id);
        }
    }
}