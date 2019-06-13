'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Reset all collectives where the host is the parent
    await queryInterface.sequelize.query(
      `UPDATE "Collectives" SET ParentCollectiveId = NULL
      WHERE "type" = 'COLLECTIVE'
      AND "ParentCollectiveId" IS NOT NULL
      AND "ParentCollectiveId" != "HostCollectiveId"`,
    );
    // opensource (COLLECTIVE)
    await queryInterface.sequelize.query(
      `UPDATE "Collectives"
       SET "parentCollectiveId" = NULL
       WHERE "type" = 'COLLECTIVE' AND "parentCollectiveId" = '83'`,
    );
    // opencollective-host (ORGANIZATION)
    await queryInterface.sequelize.query(
      `UPDATE "Collectives"
       SET "parentCollectiveId" = NULL
       WHERE "type" = 'COLLECTIVE' AND "parentCollectiveId" = '8674'`,
    );
    // wwcode (COLLECTIVE)
    await queryInterface.sequelize.query(
      `UPDATE "Collectives"
       SET "parentCollectiveId" = NULL
       WHERE "type" = 'COLLECTIVE' AND "parentCollectiveId" = '51'`,
    );
    // hostdemo (USER)
    await queryInterface.sequelize.query(
      `UPDATE "Collectives"
       SET "parentCollectiveId" = NULL
       WHERE "type" = 'COLLECTIVE' AND "parentCollectiveId" = '969'`,
    );
    // brusselstogether (COLLECTIVE)
    await queryInterface.sequelize.query(
      `UPDATE "Collectives"
       SET "parentCollectiveId" = NULL
       WHERE "type" = 'COLLECTIVE' AND "parentCollectiveId" = '207'`,
    );
    // affcny-collective (COLLECTIVE)
    await queryInterface.sequelize.query(
      `UPDATE "Collectives"
       SET "parentCollectiveId" = NULL
       WHERE "type" = 'COLLECTIVE' AND "parentCollectiveId" = '697'`,
    );
    // opensourceorg-old (COLLECTIVE)
    await queryInterface.sequelize.query(
      `UPDATE "Collectives"
       SET "parentCollectiveId" = NULL
       WHERE "type" = 'COLLECTIVE' AND "parentCollectiveId" = '9805'`,
    );
    // operationcode-collective (COLLECTIVE)
    await queryInterface.sequelize.query(
      `UPDATE "Collectives"
       SET "parentCollectiveId" = NULL
       WHERE "type" = 'COLLECTIVE' AND "parentCollectiveId" = '566'`,
    );
    // europe-collective (COLLECTIVE)
    await queryInterface.sequelize.query(
      `UPDATE "Collectives"
       SET "parentCollectiveId" = NULL
       WHERE "type" = 'COLLECTIVE' AND "parentCollectiveId" = '868'`,
    );
    // changex (COLLECTIVE)
    await queryInterface.sequelize.query(
      `UPDATE "Collectives"
       SET "parentCollectiveId" = NULL
       WHERE "type" = 'COLLECTIVE' AND "parentCollectiveId" = '932'`,
    );
    // uk-collective (COLLECTIVE)
    await queryInterface.sequelize.query(
      `UPDATE "Collectives"
       SET "parentCollectiveId" = NULL
       WHERE "type" = 'COLLECTIVE' AND "parentCollectiveId" = '842'`,
    );
  },

  down: (queryInterface, Sequelize) => {},
};
