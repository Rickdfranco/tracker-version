using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JavaScriptEngineSwither.Extensions.MsDependencyInjection;
using JavaScriptEngineSwither.ChakraCore;
using Microsoft.AspenetCore.Http;

namespace Tracker

{

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration   =   configuration; 
        }

        public IConfiguration Configuration {get;}

        public void ConfigureServices(IServicesColletion services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion_2_1);
                var connectionString    =   Configuration.GetConnectionString("ApiContext");
            services.AddEntityFrameWorkNpgsql().AddDbContext<ApiContext>(AppDomainManagerInitializationOptions => AppDomainManagerInitializationOptions.useNpgsql(connectionString));

            servicesAddCors();
        }

        public void Configure(IApplictaionBuilder app, IHosting env)
        {
            if  (env.IdDeveleopment())
            {
                app.UseDeveloperExpceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseCors(UriBuilder=>
                UriBuilder.WithOrigins("*").AllowAnyHeader().AllowAnyMethod());
            app.UseMvc();
        }
    }
}