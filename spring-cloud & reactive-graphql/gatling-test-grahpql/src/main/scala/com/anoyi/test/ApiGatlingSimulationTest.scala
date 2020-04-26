package com.anoyi.test

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._

class ApiGatlingSimulationTest extends Simulation {

  /*val httpProtocol = http
    .baseUrl("http://localhost:8080") // 5
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0")


  val scn = scenario("AddAndFindPersons").repeat(1000, "n") {
    exec(
      http("AddPerson-API")
        .post("/persons")
        .header("Content-Type", "application/json")
        .body(StringBody("""{"firstName":"John${n}","lastName":"Smith${n}","birthDate":"1980-01-01", "address": {"country":"pl","city":"Warsaw","street":"Test${n}","postalCode":"02-200","houseNo":${n}}}"""))
        .check(status.is(200))
    ).pause(4000.milliseconds)
  }.repeat(1000, "n") {
    exec(
      http("GetPerson-API")
        .get("/persons/${n}")
        .check(status.is(200))
    )
  }*/


  val httpProtocol = http
    .baseUrl("http://10.100.61.139:8080") // 5
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0")


  val scn = scenario("multi-service-access").repeat(1000, "n") {
    exec(
      http("feign-user")
        .get("/user")
        .header("Content-Type", "application/json")
        .check(status.is(200))
    ).pause(1000.milliseconds)
  }

  setUp(scn.inject(atOnceUsers(50))).maxDuration(FiniteDuration.apply(5, "minutes")).protocols(httpProtocol)


  /*val scn = scenario("BasicSimulation") // 7
    .exec(http("request_1") // 8
      .get("http://localhost:8080/persons")) // 9
    .pause(5) // 10

  setUp( // 11
    scn.inject(atOnceUsers(1)) // 12
  ).protocols(httpProtocol) // 13*/

}