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
    public class PlanController : ControllerBase
    {
        private readonly PlanStorage _storage;

        public PlanController(IConfiguration config)
        {
            _storage = new PlanStorage(config);
        }

        // GET ALL Planner
        [HttpGet]
        public IActionResult GetAllPlans()
        {
            return Ok(_storage.GetAllPlanTasks());
        }
        //Post A Plan
        [HttpPost]
        public void AddPlan([FromBody] Plan plan)
        {
            _storage.AddAPlan(plan);
        }
    }
}