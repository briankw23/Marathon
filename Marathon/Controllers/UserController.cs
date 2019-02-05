using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Marathon.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Marathon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserStorage _storage;

        public UserController(IConfiguration config)
        {
            _storage = new UserStorage(config);
        }

        // GET user with ID of 1
        [HttpGet]
        public IActionResult GetTheOnlyUser ()
        {
            return Ok(_storage.GetSingle());
        }
    }
}