
Feature: Payments

  Scenario: Payment with wrong credit card should fail
    Given I make a booking from "DUB" to "SXF" on 12/03/2019 for 2 adults and 1 child
    When I pay for booking with card details "5555 5555 5555 5557", "10/18" and "265"
    Then I should get payment declined message